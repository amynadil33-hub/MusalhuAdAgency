import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <RabbitEars size="lg" className="mx-auto mb-6" />
            <h1 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-4">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="font-inter text-white/60">
              Last updated: February 2, 2026
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">1. Introduction</h2>
                <p className="text-white/70 leading-relaxed">
                  HopAgency ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website or use our services.
                </p>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">2. Information We Collect</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We may collect information about you in various ways:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Personal data you provide (name, email, phone number, company name)</li>
                  <li>Payment information (processed securely through BML)</li>
                  <li>Usage data (how you interact with our website)</li>
                  <li>Device information (browser type, IP address)</li>
                </ul>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">3. How We Use Your Information</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our website and services</li>
                </ul>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">4. Data Security</h2>
                <p className="text-white/70 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information. Payment information is processed through secure, PCI-compliant 
                  payment gateways and is never stored on our servers.
                </p>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">5. Third-Party Services</h2>
                <p className="text-white/70 leading-relaxed">
                  We may use third-party services that collect, monitor, and analyze data. These include 
                  payment processors (BML), analytics services, and marketing tools. Each third party 
                  has their own privacy policy.
                </p>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">6. Your Rights</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <RabbitDivider className="my-8" />

              <section className="mb-8">
                <h2 className="font-sora font-bold text-2xl text-white mb-4">7. Contact Us</h2>
                <p className="text-white/70 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-violet-400 mt-2">
                  privacy@hopagency.mv
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
