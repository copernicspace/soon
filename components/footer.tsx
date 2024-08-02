import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Twofooter() {
  return (
    <footer className="bg-background py-8 border-t">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <div className="text-muted-foreground font-medium">Follow and connect with us</div>
            <div className="flex items-center justify-center gap-4 mt-2 md:justify-start">
              <Link href="https://x.com/CopernicSpace" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.linkedin.com/company/copernic-space/posts/?feedView=all" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://t.co/yvnQzKwdf0" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                <DiscIcon className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="https://drive.google.com/file/d/10V7HveWZMnjVxsKdE0h-VQNtXKLDRmUK/view" className="hover:text-foreground" prefetch={false}>
              Litepaper
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="https://github.com/copernicspace" className="hover:text-foreground" prefetch={false}>
              Open-Source
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="https://github.com/copernicspace" className="hover:text-foreground" prefetch={false}>
              Open Science
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function DiscIcon(props: any) {
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
      <path d="M21.72 16.76a16.19 16.19 0 0 0-3.94-1.01 7.08 7.08 0 0 0-.34-.75c2.08-.62 2.88-1.55 3.04-2.67a5.63 5.63 0 0 0-1.42-3.96 9.22 9.22 0 0 0-5.48-2.59c-.14-.37-.32-.74-.52-1.08a8.72 8.72 0 0 0-7.76-.04c-.21.36-.39.74-.55 1.12a9.1 9.1 0 0 0-5.5 2.59 5.62 5.62 0 0 0-1.41 3.96c.16 1.12.97 2.05 3.04 2.67a7.04 7.04 0 0 0-.33.75 16.2 16.2 0 0 0-3.95 1.01 1.05 1.05 0 0 0-.72 1v2.02c0 .29.22.63.72.52A23.58 23.58 0 0 0 12 19.53a23.56 23.56 0 0 0 9.72 1.77c.5.11.72-.23.72-.52V17.8c0-.47-.29-.86-.72-1.03ZM8.48 13.28c-.9 0-1.62-.82-1.62-1.83 0-1.02.73-1.83 1.62-1.83.9 0 1.63.82 1.62 1.83 0 1.01-.72 1.83-1.62 1.83Zm7.04 0c-.9 0-1.63-.82-1.63-1.83 0-1.02.73-1.83 1.63-1.83.89 0 1.62.82 1.62 1.83 0 1.01-.72 1.83-1.62 1.83Z" />
    </svg>
  )
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
