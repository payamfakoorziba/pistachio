import Container from "../container";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const faqs = [
  {
    title: "How does Pistachio work?",
    description:
      "Pistachio uses AI to organize all the documents, communications, and updates related to orders, and helps you create standard worklows to automate as much of the process as you want.",
  },
  {
    title: "What does Pistachio automate?",
    description:
      "Pistachio can automate tasks and communications to help you create custom workflows based on pre-defined triggers. For example, you can create a task for a salesperson to follow up on a quote 2 days after it's initially sent, or create an automated email to let a customer know when their order is ready to be delivered.",
  },
  {
    title: "What does it take to implement Pistachio?",
    description:
      "All you need to get started with Pistachio is a Gmail account.",
  },
  {
    title: "How much does it cost?",
    description: "Pistachio is currently priced based on a custom basis.",
  },
  {
    title: "Where'd the name come from?",
    description:
      "It's a great color, and it's catchy. Do we need a better reason?",
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <Container className="flex flex-col py-10" id="faq">
      <h3 className="text-center uppercase text-2xl font-semibold">
        Frequently Asked Questions
      </h3>
      <div className="bg-gradient-to-r h-px w-1/2 mx-auto from-transparent via-pistachio to-transparent my-4" />
      <Accordion type="multiple">
        {faqs.map((faq) => (
          <AccordionItem key={faq.title} title={faq.title} value={faq.title}>
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent>{faq.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default FrequentlyAskedQuestions;
