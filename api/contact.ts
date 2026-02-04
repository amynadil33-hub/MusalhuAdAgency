import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

// Supabase (server-side, service role)
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name,
    company,
    email,
    phone,
    category,
    budget,
    message,
  } = req.body;

  try {
    /* 1️⃣ SAVE TO SUPABASE */
    const { error: dbError } = await supabase
      .from("contact_inquiries")
      .insert([
        {
          name,
          company,
          email,
          phone,
          category,
          budget_range: budget,
          message,
        },
      ]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return res.status(500).json({ error: "Database error" });
    }

    /* 2️⃣ SEND EMAIL (NAMECHEAP SMTP) */
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Muslahu Advertising Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: "New Contact Inquiry",
      text: `
New inquiry received:

Name: ${name}
Company: ${company || "-"}
Email: ${email}
Phone: ${phone || "-"}
Category: ${category}
Budget: ${budget || "-"}

Message:
${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ error: "Failed to process contact form" });
  }
}
