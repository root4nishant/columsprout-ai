import Heading from "@/components/custom/reusables/Heading";
import Section from "@/components/custom/reusables/Section";
import { RxCounterClockwiseClock } from "react-icons/rx";

const PrivacyPolicy = () => {
  return (
    <Section className="bg-gray-100 text-gray-800 min-h-screen py-20 text-justify">
      <div className="lg:p-6 p-0">
        <Heading text="Our Privacy Policy" />
        <div className="flex justify-center items-center">
          <p className="text-center text-gray-600 mb-8 border border-blue-100 p-2 rounded-full w-fit font-semibold flex items-center gap-2">
            <RxCounterClockwiseClock />
            Last Updated on November 12, 2024
          </p>
        </div>
        <div className="lg:text-xl text-sm">
          <p className="mb-6  ">
            At <span className="font-semibold">Columsprout</span>, we are
            committed to protecting your privacy and ensuring the security of
            your personal information. This Privacy Notice outlines how we
            collect, use, and safeguard your data when you use our services.
          </p>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect the following types of information when you access
            our services:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              Personal information like name, email address, and other contact
              details when you sign up or interact with us.
            </li>
            <li>
              Usage Data: Information about how you interact with the site,
              including IP address, browser type, and page visit patterns.
            </li>
          </ul>

          <h2 className="lg:text-xl font-bold mb-4 text-md">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>To provide and improve our services.</li>
            <li>Send you service-related communications.</li>
            <li>Communicate with you regarding your account or updates.</li>
            <li>Analyze data to improve user experience.</li>
          </ul>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            3. Data Protection
          </h2>
          <p className="mb-4">
            We take measures to protect your personal information and employ
            industry-standard safeguards to protect your data from unauthorized
            access or disclosure, including:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              <span className="font-semibold">Data Encryption:</span> Secure
              encryption of sensitive data.
            </li>
            <li>
              <span className="font-semibold">Access Control:</span> Only
              authorized employees have access to sensitive information.
            </li>
            <li>
              <span className="font-semibold">Regular Audits:</span> Periodic
              reviews of security and data protection measures.
            </li>
          </ul>

          <h2 className="lg:text-xl text-md font-bold mb-4">
            4. Sharing Your Information
          </h2>
          <p className="mb-6">
            We do not share your personal information with third parties, except
            where required by law or to protect your rights.
          </p>

          <h2 className="lg:text-xl text-md font-bold mb-4">5. Your Rights</h2>
          <p className="mb-6">
            You have the right to access, update, or delete your personal data
            in the application. You can email us at{" "}
            <a
              href="mailto:connect@columsprout.ai"
              className="text-blue-600 hover:underline"
            >
              connect@columsprout.ai
            </a>{" "}
            for any related queries or requests.
          </p>

          <h2 className="lg:text-xl text-md font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Notice or how we handle
            your data, please contact us at{" "}
            <a
              href="mailto:connect@columsprout.ai"
              className="text-blue-600 hover:underline"
            >
              connect@columsprout.ai
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
};

export default PrivacyPolicy;
