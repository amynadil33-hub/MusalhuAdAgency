import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      // After clicking the email verification link, Supabase may attach tokens in the URL.
      // getSession() will read them and establish the session.
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        navigate("/login");
        return;
      }

      const user = data.session?.user;

      // If verified, send to dashboard (or home). If not, force login.
      if (user?.email_confirmed_at) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    })();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-2xl border bg-background p-8 shadow-sm text-center">
        <h1 className="text-xl font-semibold">Finishing sign-in…</h1>
        <p className="text-muted-foreground mt-2">
          Please wait a moment while we verify your session.
        </p>
      </div>
    </div>
  );
}
