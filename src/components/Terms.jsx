
import React from 'react'
import { Link } from 'react-router-dom';

function Terms() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md py-40">
      <Link to="/Auth/Login" className=" flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" w-[24px] h-[24px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        <p>Back to Login</p>
      </Link>
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700">
          Welcome to <strong>[Urban trov]</strong>, an online marketplace that
          connects vendors with customers. These Terms and Conditions ("Terms")
          govern your use of our platform, whether as a vendor or customer. By
          accessing or using our platform, you agree to be bound by these Terms.
          If you do not agree to these Terms, you must refrain from using our
          services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Platform:</strong> Refers to <strong>[Urban trov]</strong>,
            the website, app, and all related services provided by the{" "}
            <strong>[Urban trov team]</strong>.
          </li>
          <li>
            <strong>Vendor:</strong> Any individual or business entity that
            lists, sells, or offers products/services on the platform.
          </li>
          <li>
            <strong>Customer:</strong> Any individual or entity that purchases
            or intends to purchase products/services from vendors on the
            platform.
          </li>
          <li>
            <strong>User:</strong> Refers collectively to both vendors and
            customers who use the platform.
          </li>
          <li>
            <strong>Content:</strong> Includes any text, images, data, or other
            material uploaded or transmitted through the platform.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Account Registration</h2>
        <h3 className="text-xl font-semibold mb-2">3.1 Vendors</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Vendors must register for an account by providing accurate and
            complete information, including business name, contact details, and
            any required legal documentation.
          </li>
          <li>
            Vendors are responsible for maintaining the confidentiality of their
            account credentials and are liable for all activities conducted
            through their account.
          </li>
          <li>
            Vendors agree to comply with all applicable laws, regulations, and
            platform policies when listing and selling products/services.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2">3.2 Customers</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Customers must register for an account or provide necessary
            information at checkout to make purchases.
          </li>
          <li>
            Customers are responsible for maintaining the confidentiality of
            their account credentials and are liable for all activities
            conducted through their account.
          </li>
          <li>
            Customers must provide accurate shipping and payment information
            when making purchases.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Use of the Platform</h2>
        <h3 className="text-xl font-semibold mb-2">4.1 Vendors</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Vendors are solely responsible for the accuracy, legality, and
            quality of the products/services they list on the platform.
          </li>
          <li>
            Vendors must ensure their products/services do not infringe upon any
            intellectual property rights or other third-party rights.
          </li>
          <li>
            Vendors agree to comply with all platform policies, including but
            not limited to those concerning product listing, pricing, customer
            service, and returns.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2">4.2 Customers</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Customers agree to use the platform only for lawful purposes and in
            accordance with these Terms.
          </li>
          <li>
            Customers are responsible for reviewing product descriptions,
            prices, and policies before making a purchase.
          </li>
          <li>
            Customers agree not to engage in fraudulent activities, such as
            making false claims or chargebacks without valid reasons.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Transactions and Payments
        </h2>
        <h3 className="text-xl font-semibold mb-2">5.1 For Vendors</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            All transactions on the platform are processed through secure
            payment gateways.
          </li>
          <li>
            [Urban trov] will charge a 10% commission on every sale made by
            vendors through the platform. This commission will be deducted
            automatically from the sale amount before the vendor’s earnings are
            disbursed.
          </li>
          <li>
            Vendors authorize the platform to collect payments from customers on
            their behalf and to disburse the remaining funds after the deduction
            of the 10% commission, according to the platform’s payment schedule.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2">5.2 For Customers</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Customers authorize the platform to charge the payment method
            provided for the total purchase amount, including any applicable
            taxes and fees.
          </li>
          <li>
            Customers will be charged the listed product price plus any
            additional fees at the time of checkout.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping and Delivery</h2>
        <h3 className="text-xl font-semibold mb-2">6.1 Vendors</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Vendors are responsible for the timely shipping and delivery of
            products to customers as per the agreed timeframe.
          </li>
          <li>
            Vendors must provide accurate tracking information to customers when
            available.
          </li>
          <li>
            Vendors agree to resolve any shipping issues or disputes with
            customers promptly and in good faith.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2">6.2 Customers</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Customers are responsible for providing accurate shipping
            information during the purchase process.
          </li>
          <li>
            Customers agree to track their orders and notify vendors of any
            issues related to delivery.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Returns, Refunds, and Cancellations
        </h2>
        <h3 className="text-xl font-semibold mb-2">7.1 Vendors</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Vendors must clearly state their return, refund, and cancellation
            policies in their product listings.
          </li>
          <li>
            Vendors are responsible for processing returns, issuing refunds, and
            handling cancellations in accordance with their stated policies and
            the platform’s guidelines.
          </li>
          <li>
            Vendors agree to adhere to any legal requirements regarding returns,
            refunds, and cancellations.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-2">7.2 Customers</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Customers must review and agree to the vendor’s return, refund, and
            cancellation policies before making a purchase.
          </li>
          <li>
            Customers agree to return products in the condition received and
            within the specified return period, if applicable.
          </li>
          <li>
            Customers acknowledge that some products/services may be
            non-refundable or non-returnable, as stated in the vendor’s policy.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
        <p className="text-gray-700">
          Users agree not to use the platform for any unlawful or prohibited
          activities, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Posting or transmitting any false, misleading, or defamatory
            content.
          </li>
          <li>
            Violating the intellectual property rights or privacy rights of
            others.
          </li>
          <li>Engaging in any form of harassment, abuse, or hate speech.</li>
          <li>
            Attempting to gain unauthorized access to the platform’s systems or
            other users’ accounts.
          </li>
          <li>
            Introducing any viruses, malware, or harmful code to the platform.
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          The platform reserves the right to investigate and take appropriate
          action, including account suspension or termination, against users who
          violate these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Privacy and Data Protection
        </h2>
        <p className="text-gray-700">
          The platform is committed to protecting users&apos; privacy and
          personal data. Our Privacy Policy, which is incorporated into these
          Terms by reference, explains how we collect, use, and share personal
          information.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>
            Vendors agree to comply with all applicable data protection laws and
            regulations when handling customers’ personal information.
          </li>
          <li>
            Customers agree that their personal information may be shared with
            vendors for the purpose of fulfilling orders and providing customer
            service.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
        <p className="text-gray-700">
          All content on the platform, including but not limited to text,
          graphics, logos, images, and software, is the property of{" "}
          <strong>[Urban trov]</strong> or its licensors and is protected by
          intellectual property laws.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>
            Users are granted a limited, non-exclusive, non-transferable license
            to use the platform for personal or commercial purposes as permitted
            by these Terms.
          </li>
          <li>
            Users agree not to reproduce, distribute, or create derivative works
            from any content on the platform without prior written consent from{" "}
            <strong>[Urban trov]</strong> or the respective rights holder.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Use of Product Images for Marketing
        </h2>
        <p className="text-gray-700">
          By uploading product images to the platform, vendors grant{" "}
          <strong>[Urban trov]</strong> the right to use these images for
          promotional purposes. This includes using the images to promote both
          the vendor&apos;s products and the <strong>[Urban trov]</strong> brand
          on various marketing channels, including but not limited to social
          media, advertisements, and website features.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="text-gray-700">
          The platform is provided on an “as-is” and “as-available” basis
          without warranties of any kind, express or implied, including but not
          limited to warranties of merchantability, fitness for a particular
          purpose, and non-infringement.
        </p>
        <p className="text-gray-700 mt-4">
          To the fullest extent permitted by law, <strong>[Urban trov]</strong>{" "}
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, including but not limited to loss
          of profits, data, use, goodwill, or other intangible losses, resulting
          from your access to or use of the platform.
        </p>
        <p className="text-gray-700 mt-4">
          Users agree that they will not bring any claim or lawsuit against{" "}
          <strong>[Urban trov]</strong>, its affiliates, or any of its officers,
          directors, employees, or agents for any matter arising out of or
          related to their use of the platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
        <p className="text-gray-700">
          Users agree to indemnify, defend, and hold harmless{" "}
          <strong>[Urban trov]</strong>, its affiliates, and their respective
          officers, directors, employees, and agents from and against any and
          all claims, liabilities, damages, losses, costs, and expenses
          (including reasonable legal fees) arising out of or in any way
          connected with their use of the platform, their breach of these Terms,
          or their violation of any law or the rights of a third party.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
        <p className="text-gray-700">
          The platform encourages vendors and customers to resolve disputes
          directly and amicably.
        </p>
        <p className="text-gray-700 mt-4">
          If a dispute cannot be resolved directly, the platform may, at its
          discretion, offer mediation services but does not guarantee
          resolution.
        </p>
        <p className="text-gray-700 mt-4">
          Any legal disputes arising out of or related to these Terms, the
          platform, or the use thereof shall be governed by and construed in
          accordance with the laws of{" "}
          <strong>[Federal Republic Of Nigeria]</strong>.
        </p>
        <p className="text-gray-700 mt-4">
          Users agree to submit to the exclusive jurisdiction of the courts of{" "}
          <strong>[The Federal Republic of Nigeria]</strong> for the resolution
          of any disputes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Termination</h2>
        <p className="text-gray-700">
          The platform reserves the right to suspend or terminate any user
          account, at its sole discretion, for violations of these Terms or any
          applicable laws.
        </p>
        <p className="text-gray-700 mt-4">
          Users may terminate their accounts at any time by contacting customer
          service, but such termination will not affect any obligations or
          liabilities incurred prior to termination.
        </p>
        <p className="text-gray-700 mt-4">
          Upon termination, the user&apos;s right to access and use the platform
          will immediately cease.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Amendments</h2>
        <p className="text-gray-700">
          <strong>[Urban trov]</strong> reserves the right to update or modify
          these Terms at any time. Any significant changes will be communicated
          to users via email or through a notice on the platform.
        </p>
        <p className="text-gray-700 mt-4">
          Continued use of the platform after any changes to the Terms
          constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Website Updates</h2>
        <p className="text-gray-700">
          <strong>[Urban trov]</strong> may update or modify the platform and
          its features from time to time to improve the user experience and
          implement new functionalities.
        </p>
      </section>
    </div>
  );
}

export default Terms