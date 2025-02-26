import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
    { question: "What is your return policy?", answer: "We accept returns within 30 days of purchase." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with additional shipping charges." },
    { question: "How can I track my order?", answer: "You will receive a tracking link via email after your purchase." },
    { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and bank transfers." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-16 px-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-center">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-center mt-2 mb-6">Find answers to common questions about our services.</p>

            <div className="space-y-4">
                <ul>
                    {faqs.map((faq, index) => (
                        <li key={index} className="border-b border-gray-700">
                            <button
                                className="w-full flex justify-between items-center p-4 text-left"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>
                            {openIndex === index && (
                                <p className="p-4 border-t border-gray-700 text-gray-300">{faq.answer}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="text-center my-8">
                <h3 className="text-xl font-semibold">Still have questions?</h3>
                <p className="text-gray-400 py-6">Reach out to us for further support.</p>
                <Button variant='custom' className="bg-gray-900 border-purple-500 border px-5">Contact</Button>
            </div>
        </div>
    );
}
