import Image from "next/image";
import Container from "../container";

const teamMembers = [
  {
    name: "Jake Meyer",
    role: "CEO",
    imageUrl:
      "https://framerusercontent.com/images/hLLVV5KA0IVPrx6RrbWIhmIMpg.jpeg",
  },
  {
    name: "Sage Maxwell",
    role: "CTO",
    imageUrl:
      "https://framerusercontent.com/images/WmJSsDaFwKNM10pXKbKFMkdQ7I.jpeg",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-pistachio/20" id="about">
      <Container className="flex flex-col items-center py-10 gap-y-10">
        <div className="w-full">
          <h3 className="text-center uppercase text-2xl font-semibold">
            About the Pistachio Team
          </h3>
          <div className="bg-gradient-to-r h-px w-1/2 mx-auto from-transparent via-pistachio to-transparent mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-screen-lg">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative flex flex-col items-center gap-y-2  "
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg group">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-neutral-600">{member.role}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-pretty text-lg leading-8 max-w-screen-md">
          We started Pistachio because we believe there&apos;s an opportunity
          for modern, user-friendly software to create better experiences for
          customers, and better business outcomes for owners and employees in
          the furniture industry. We look forward to partnering with you to move
          your business and the industry forward.
        </p>
      </Container>
      <p className="text-center mt-10 pb-4 text-xs text-black/50">
        © 2024 Pistachio Software Inc. All rights reserved.
      </p>
    </div>
  );
};

export default AboutUs;
