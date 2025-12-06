// src/components/Features.tsx
import { Card } from "@/components/ui/card";
import { Truck, Wrench, Globe, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Worldwide Delivery",
    desc: "Fast shipping to any country",
  },
  {
    icon: Truck,
    title: "Turnkey Procurement",
    desc: "We source, deliver, and install",
  },
  {
    icon: Wrench,
    title: "OEM & Aftermarket",
    desc: "Original and high-quality alternatives",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    desc: "All parts tested and certified",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-16 drop-shadow-lg">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Card
              key={i}
              className="group relative p-10 text-center bg-zinc-900 border border-red-900/50 rounded-2xl hover:border-red-500 hover:shadow-2xl hover:shadow-red-600/40 transition-all duration-500">
              {/* Red glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 via-red-500/30 to-red-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition blur-xl" />

              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-red-600 to-red-700 p-5 shadow-xl shadow-red-600/50">
                  <f.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
