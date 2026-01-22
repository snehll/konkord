import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-red-900" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Let’s Work Together
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow">
            We reply within 4 hours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-red-500 mb-8">
                Get in Touch
              </h2>
              <ContactForm companyName="konkord"/>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-red-500 mb-4">
                  KONKORD HOLDING OÜ
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Harju maakond, Tallinn, Kesklinna linnaosa
                  <br />
                  Roosikrantsi tn 2, 10119
                  <br />
                  Email: order@konkordholding.ee
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-red-500 mb-4">
                  Response Time
                </h3>
                <p className="text-xl text-gray-300">
                  Usually within 4 hours (Mon–Fri)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
