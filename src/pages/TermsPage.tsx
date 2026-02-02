import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';

export default function TermsPage() {
  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <RabbitEars size="lg" className="mx-auto mb-6" />
            <h1 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-4">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="font-inter text-white/60">
              Last updated: February 2, 2026
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">1. Agreement to Terms</h2>
                <p className="text-white/70 leading-relaxed">
                  By accessing or using HopAgency's services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of the terms, you may not access our services.
                </p>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">2. Services</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  HopAgency provides marketing, advertising, and event management services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Digital marketing and social media management</li>
                  <li>Website design and development</li>
                  <li>Paid advertising management</li>
                  <li>Event planning and execution</li>
                  <li>Content creation and video production</li>
                </ul>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">3. Payment Terms</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  For our productized packages:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Setup fees are due upon signing</li>
                  <li>Monthly retainers are billed at the start of each month</li>
                  <li>Payments are processed through BML payment gateway</li>
                  <li>All fees are in Maldivian Rufiyaa (MVR) unless otherwise stated</li>
                  <li>Refunds are subject to our refund policy</li>
                </ul>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">4. Client Responsibilities</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Provide necessary access to accounts and platforms</li>
                  <li>Review and approve content within agreed timelines</li>
                  <li>Make payments on time</li>
                  <li>Communicate project requirements clearly</li>
                </ul>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">5. Intellectual Property</h2>
                <p className="text-white/70 leading-relaxed">
                  Upon full payment, clients receive ownership of deliverables created specifically for them. 
                  HopAgency retains the right to showcase work in our portfolio unless otherwise agreed. 
                  Pre-existing materials, templates, and tools remain the property of HopAgency.
                </p>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">6. Confidentiality</h2>
                <p className="text-white/70 leading-relaxed">
                  We maintain strict confidentiality regarding all client information, business strategies, 
                  and proprietary data. This obligation continues even after the termination of our services.
                </p>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">7. Limitation of Liability</h2>
                <p className="text-white/70 leading-relaxed">
                  HopAgency shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from your use of our services. Our total liability shall not 
                  exceed the amount paid for services in the preceding 12 months.
                </p>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">8. Termination</h2>
                <p className="text-white/70 leading-relaxed">
                  Either party may terminate services with 30 days written notice. Upon termination, 
                  all outstanding fees become immediately due. We will provide all completed deliverables 
                  and assist with transition as needed.
                </p>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">9. Governing Law</h2>
                <p className="text-white/70 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the 
                  Republic of Maldives. Any disputes shall be resolved in the courts of Malé.
                </p>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">10. Contact</h2>
                <p className="text-white/70 leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-violet-400 mt-2">
                  legal@hopagency.mv
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
