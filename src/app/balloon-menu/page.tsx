import Image from "next/image";

const balloonItems = [
  {
    name: "Arch with Backdrop",
    includes: [
      "1 Custom Backdrop (Metal Frame)",
      "1 Custom Sign (Vinyl)",
      "1 Organic Balloon Garland (Balloon sizes 5\"-18\")"
    ],
    image: "/balloon-menu-images/arch-with-backdrop.png"
  },
  {
    name: "Double Arch with Backdrops",
    includes: [
      "2 Custom Backdrops (Metal Frame)",
      "1 Custom Sign (Vinyl)",
      "1.5 Organic Balloon Garlands (Balloon sizes 5\"-18\")"
    ],
    image: "/balloon-menu-images/double-arch-with-backdrops.png"
  },
  {
    name: "Half Square Arch",
    includes: [
      "1 Organic Balloon Garland (Balloon sizes 5\"-18\")"
    ],
    addOns: "Square Frame available for rental",
    image: "/balloon-menu-images/half-square-arch.png"
  },
  {
    name: "Square Arch",
    includes: [
      "1 Organic Balloon Garland (Balloon sizes 5\"-18\")"
    ],
    addOns: "Square Frame available for rental",
    image: "/balloon-menu-images/square-arch.png"
  },
  {
    name: "Full Hoop",
    includes: [
      "1 Metal Hoop Frame",
      "1 Organic Balloon Garland (Balloon sizes 5\"-18\")"
    ],
    image: "/balloon-menu-images/full-hoop.png"
  },
  {
    name: "Custom Hoop",
    includes: [
      "1 Metal Hoop Frame",
      "1.5 Organic Balloon Garlands (Balloon sizes 5\"-18\")"
    ],
    image: "/balloon-menu-images/custom-hoop.png"
  },
  {
    name: "Organic Arch",
    includes: [
      "1 Metal Arch Frame",
      "1 Organic Balloon Garland (Balloon sizes 5\"-18\")"
    ],
    image: "/balloon-menu-images/organic-arch.png"
  },
  {
    name: "Classic Arch",
    includes: [
      "1 Metal Arch Frame",
      "1 Classic Balloon Garland"
    ],
    image: "/balloon-menu-images/classic-arch.png"
  },
  {
    name: "Marquee Letters/Numbers with Balloon Garlands",
    includes: [
      "Custom Marquee Letters/Numbers",
      "Balloon garlands on both sides or all around"
    ],
    image: "/balloon-menu-images/marquee-letters-garlands.jpg"
  },
  {
    name: "Stand Alone Garlands",
    includes: [
      "1 Metal Pole",
      "1 Organic Balloon Garland (Balloon sizes 5\"-18\")"
    ],
    image: "/balloon-menu-images/stand-alone-garlands.png"
  },
  {
    name: "Balloon Wall",
    includes: [
      "1 Organic Balloon Wall (Balloon sizes 5\"-18\")"
    ],
    image: "/balloon-menu-images/balloon-wall.png"
  },
  {
    name: "Balloon Columns",
    includes: [
      "1 Metal Pole",
      "1 Classic Balloon Column",
      "1 Large Balloon"
    ],
    image: "/balloon-menu-images/balloon-columns.png"
  },
  {
    name: "Balloon Centerpiece",
    includes: [
      "3 Tier Balloons",
      "1 Large Latex or Foil Balloon"
    ],
    image: "/balloon-menu-images/balloon-centerpiece.png"
  },
  {
    name: "Sign & Garland",
    includes: [
      "1 Custom Acrylic Sign",
      "1 Easel Stand",
      "1 Organic Balloon Garland"
    ],
    image: "/balloon-menu-images/sign-and-garland.png"
  },
  {
    name: "Classic Garland",
    includes: [
      "1 Organic Balloon Garland"
    ],
    image: "/balloon-menu-images/classic-garland.png"
  },
];

const addOns = [
  "Metallic Balloons",
  "Large Balloons size 24-36\"",
  "Foil Orbz",
  "Foil Starbursts",
  "Foil Numbers/Letters",
  "Faux floral, Pampas, Dried leaves, Themed Mylar Balloons"
];

export default function BalloonMenuPage() {
  return (
    <div className="px-2 sm:px-3 py-8 md:py-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-3 md:mb-6 text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#78396D] font-dancing-script">
          Balloon Menu
        </h1>
        <p className="mb-8 md:mb-16 text-center text-sm md:text-lg text-gray-700">
          Unlock your potential with our tailored services just for you!
        </p>

        <div className="space-y-8 md:space-y-12">
          {balloonItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col md:flex-row gap-4 md:gap-6 rounded-lg bg-white p-4 md:p-6 shadow-md"
            >
              {item.image && (
                <div className="flex-shrink-0 w-full md:w-48 h-32 md:h-40 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              )}
              <div className="flex-1">
                <h2 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-black">
                  {item.name}
                </h2>
                <div className="mb-2">
                  <p className="text-sm md:text-base font-semibold text-gray-800 mb-1">Includes:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700 ml-2">
                    {item.includes.map((include, idx) => (
                      <li key={idx}>{include}</li>
                    ))}
                  </ul>
                </div>
                {item.addOns && (
                  <p className="text-sm md:text-base text-gray-600 mt-2">
                    <span className="font-semibold">Add Ons:</span> {item.addOns}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-8 md:mt-16 rounded-lg bg-white p-4 md:p-6 lg:p-8 shadow-md">
          <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-black">
            Add Ons
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-gray-700">
            {addOns.map((addOn, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#D96E95]">•</span>
                <span>{addOn}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-xs md:text-sm text-gray-600 italic mb-4">
            **Drawn balloon designs are provided for illustrative purposes and may differ from the actual product.
          </p>
        </div>
      </div>
    </div>
  );
}
