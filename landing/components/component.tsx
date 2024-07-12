"use client";

import { useState } from "react";
import Link from "next/link";

export function Component() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
          };

            return (
                <div>
                      <button
                              onClick={() => toggleAccordion(0)}
                                      className="p-4 bg-blue-500 text-white"
                                            >
                                                    Toggle Accordion 0
                                                          </button>
                                                                <button
                                                                        onClick={() => toggleAccordion(1)}
                                                                                className="p-4 bg-blue-500 text-white"
                                                                                      >
                                                                                              Toggle Accordion 1
                                                                                                    </button>

                                                                                                          <div>
                                                                                                                  <div className={`p-4 ${openAccordion === 0 ? "block" : "hidden"}`}>
                                                                                                                            <Link href="/page0">
                                                                                                                                        <a>Content for Accordion 0</a>
                                                                                                                                                  </Link>
                                                                                                                                                          </div>
                                                                                                                                                                  <div className={`p-4 ${openAccordion === 1 ? "block" : "hidden"}`}>
                                                                                                                                                                            <Link href="/page1">
                                                                                                                                                                                        <a>Content for Accordion 1</a>
                                                                                                                                                                                                  </Link>
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                      