"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  return (
    <div
      className="flex flex-col gap-4 md:w-4/5
    "
    >
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="rounded-full"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          className="rounded-full"
        />
      </div>
      <Label className="py-2 font-bold text-secondary-foreground">
        Lupa Password?
      </Label>
      <Button type="submit" className="rounded-full">
        Login
      </Button>

      <span className="flex items-center justify-between gap-2 py-2 text-xs font-bold leading-none text-muted-foreground">
        <span className="h-[1px] w-full bg-input"></span>
        Atau
        <span className="h-[1px] w-full bg-input"></span>
      </span>

      <Button variant="outline" className="justify-center gap-2 rounded-full">
        <FcGoogle className="h-4 w-4" />
        Login dengan Google
      </Button>
      <Button variant="outline" className="rounded-full">
        Baru mengenal LinkedIn? Bergabung sekarang
      </Button>
    </div>
  );
};

export default LoginForm;
