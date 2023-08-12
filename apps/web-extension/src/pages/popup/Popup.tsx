import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  buttonVariants
} from '@ps/ui-react';
import { GithubIcon } from 'lucide-react';

export default function Popup() {
  return (
    <main className="form-control h-96 w-96 items-center justify-center">
      <Card>
        <CardHeader>
          <div className="mb-6 flex justify-center">
            <Avatar className="h-14 w-14">
              <AvatarImage src="/icon128.png" className="rounded-full" />
            </Avatar>
          </div>
          <CardTitle>Poly Starter</CardTitle>
          <CardDescription>Web Extension template description</CardDescription>
        </CardHeader>
        <CardContent>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Fractal-Tess/project-s/tree/main/apps/web-extension"
            className={buttonVariants({ variant: 'outline' })}>
            <GithubIcon />
            Track development
          </a>
        </CardContent>
      </Card>
    </main>
  );
}
