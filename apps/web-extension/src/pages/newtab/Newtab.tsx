import {
  Card,
  CardHeader,
  Avatar,
  AvatarImage,
  CardTitle,
  CardDescription,
  CardContent,
  buttonVariants
} from '@ps/ui-react';
import { GithubIcon } from 'lucide-react';

export default function Newtab() {
  return (
    <main className="form-control min-h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <div className="mb-6 flex justify-center">
            <Avatar className="h-14 w-14">
              <AvatarImage src="/icon128.png" className="rounded-full" />
            </Avatar>
          </div>
          <CardTitle>Poly Starter</CardTitle>
          <CardDescription>
            Dev tools page for Poly starter web extension
          </CardDescription>
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
