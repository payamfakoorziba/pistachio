import { ListVideo, Timer, TriangleAlert } from "lucide-react";
import Container from "../container";
import SpotlightCard from "../spotlight-card";

const features = [
  {
    Icon: Timer,
    title: "See status and docs in one view",
    description:
      "Sync order updates, documents, and communication history to create a single, real-time dashboard for all your orders–with NO data entry.",
  },
  {
    Icon: ListVideo,
    title: "Never miss a follow-up",
    description:
      "Keep processes consistent while allowing for customization to reduce communication overhead and build stronger relationships.",
  },
  {
    Icon: TriangleAlert,
    title: "Catch expensive errors early",
    description:
      "Catch and correct expensive order mistakes in purchase orders and acknowledgments before they impact your bottom line.",
  },
];

const Features = () => {
  return (
    <div
      className="bg-gradient-to-b from-pistachio to-green-600 py-10"
      id="features"
    >
      <Container className="flex flex-col items-center">
        <h3 className="text-center uppercase text-white text-2xl font-semibold">
          FEATURES & BENEFITS
        </h3>
        <div className="bg-gradient-to-r h-px w-1/2 mx-auto from-transparent via-white to-transparent my-4" />
        <p className="text-sm md:text-base text-center text-white mb-8 md:text-balance max-w-screen-md font-light">
          Empower your team, strengthen customer & vendor relationships, and
          improve your bottom line with Pistachio&apos;s modern platform for
          order management.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {features.map((feature, index) => (
            <SpotlightCard key={feature.title}>
              <div className="flex flex-col items-center text-center gap-y-2 py-10 px-4">
                <feature.Icon className="w-12 h-12 text-pistachio mb-4" />
                <h4 className="text-xl font-semibold text-green-800 text-pretty">
                  {feature.title}
                </h4>
                <p className="text-gray-900 text-sm mt-2 text-pretty">
                  {feature.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Features;
