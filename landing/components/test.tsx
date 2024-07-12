"use client"

import { useState } from "react"
import Link from "next/link"

export default function Component() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="flex flex-col">
      <section className="relative w-full">
        <img
          src="https://pbs.twimg.com/profile_banners/867822116435107840/1704574945/1500x500"
          alt="Hero Image"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute bottom-0 w-full flex flex-col md:flex-row items-center justify-center gap-4 pb-4">
          <Link
            href="https://copernic-space.ghost.io/#/portal"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Subscribe
          </Link>
          <Link
            href="https://copernicspace.com/space-passports"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get early access
          </Link>
        </div>
      </section>
      <section className="bg-secondary text-secondary-foreground py-8 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-2 text-center">
            New Platform & Moon Mission Coming Soon
          </h2>
          <p className="text-lg">
            We are temporarily taking the platform down to implement
            groundbreaking new features and prepare for the launch of our 2024
            Moon Mission and Asset Sale. 
          </p>
          <br />
          <p className="text-lg">
            We have created an FAQ below and included a detailed note from our
            Technical Director to provide further insights
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://optim.tildacdn.one/tild3830-3939-4133-b737-393335396564/-/resize/418x/-/format/webp/Card_Closed.png"
              alt="Article Cover"
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">A Letter From Liam</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our technical director provides an update on the platform
              development and how you can stay involved
            </p>
            <Link
              href="https://copernic-space.ghost.io/spacemart-platform-development-log-1/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <button
                className={`flex items-center justify-between w-full bg-background rounded-md px-4 py-3 text-lg font-medium ${
                  openAccordion === 0
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => toggleAccordion(0)}
              >
                When is the new platform launching?
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    openAccordion === 0 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === 0 && (
                <div className="bg-background rounded-md px-4 py-3 text-muted-foreground">
                  The new and improved Copernic Space Platform is set to launch
                  in early September, right after the holidays. To accommodate
                  our growing user base, implement significant enhancements and
                  prepare for the exciting 2024 Moon Mission and Asset Sale in
                  Q4 we will temporarily shut down the current platform. Your
                  patience and support are greatly appreciated as we work to
                  enhance your Copernic Space experience and our historic moon
                  mission.
                </div>
              )}
            </div>
            <div>
              <button
                className={`flex items-center justify-between w-full bg-background rounded-md px-4 py-3 text-lg font-medium ${
                  openAccordion === 1
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => toggleAccordion(1)}
              >
                What new features or improvements are being added to the
                platform?
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    openAccordion === 1 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === 1 && (
                <div className="bg-background rounded-md px-4 py-3 text-muted-foreground">
                  We've been closely listening to your feedback and refining our
                  vision for over a year. Get ready for exciting enhancements
                  designed to elevate your experience and offer even more ways
                  to engage with space assets. These improvements include the
                  ability to use credit cards and various cryptocurrencies for
                  asset purchases, the option to create collections of space
                  assets, and a custom section for Moon Mission assets, among
                  other exciting updates. Join our Discord community to be among
                  the first to access demos and test the platform before the
                  official release.
                </div>
              )}
            </div>
            <div>
              <button
                className={`flex items-center justify-between w-full bg-background rounded-md px-4 py-3 text-lg font-medium ${
                  openAccordion === 2
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => toggleAccordion(2)}
              >
                Where are my space assets and Spacibles NFTs stored?
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    openAccordion === 2 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === 2 && (
                <div className="bg-background rounded-md px-4 py-3 text-muted-foreground">
                  Your assets are safe and secure on the Polygon blockchain.
                  They haven't moved and you still have full ownership and
                  control. The marketplace provides a user-friendly interface to
                  manage your assets, but they are securely stored on the
                  blockchain and in the wallet you used for Copernic Space.
                </div>
              )}
            </div>
            <div>
              <button
                className={`flex items-center justify-between w-full bg-background rounded-md px-4 py-3 text-lg font-medium ${
                  openAccordion === 4
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => toggleAccordion(4)}
              >
                Do I need to take any action to access my assets after the
                platform re-launch?
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    openAccordion === 4 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === 4 && (
                <div className="bg-background rounded-md px-4 py-3 text-muted-foreground">
                  No, you won't need to do anything. Your assets will remain
                  secure and accessible through your existing wallet and the
                  Polygon blockchain.
                </div>
              )}
            </div>
            <div>
              <button
                className={`flex items-center justify-between w-full bg-background rounded-md px-4 py-3 text-lg font-medium ${
                  openAccordion === 5
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
                onClick={() => toggleAccordion(5)}
              >
                How can I view or interact with my assets during the transition
                period?
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    openAccordion === 5 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === 5 && (
                <div className="bg-background rounded-md px-4 py-3 text-muted-foreground">
                  You can still view and interact with your assets through your
                  wallet on the Polygon blockchain, or on{" "}
                  <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">
                    OpenSea
                  </a>{" "}
                  through your wallet.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src='https://copernic-space.ghost.io/content/images/size/w960/2024/07/1000014918.webp'
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">
              Join Real World Space Opportunities
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Unlock exclusive access to the final frontier with a Copernic
              Space Passport NFT - your gateway to owning and trading
              real-world space assets and being part of historic space
              missions.
            </p>
            <Link
              href="https://copernicspace.com/space-passports#rec566598157"
              className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
