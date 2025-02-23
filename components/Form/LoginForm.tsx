"use client";

import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SubmitButton from "../SubmitButton";
import { createUser, loginUser } from "@/lib/actions/user.actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const formSchema = z.object({
  userEmail: z.string().email(),
});

const formSchemaOtp = z.object({
  password: z.string().max(6),
});

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openOtp, setopenOtp] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userEmail: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user = await createUser(values.userEmail);
      if (user) {
        router.push(pathname + "?" + createQueryString("userId", user.userId));
        setopenOtp(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="userEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="meu@email.com"
                    {...field}
                    className="border-zinc-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton
            isLoading={isLoading}
            className="bg-cyan-600 hover:bg-cyan-800"
          >
            Solicitar entrada
          </SubmitButton>
        </form>
      </Form>
      {openOtp && <FormOtp />}
    </>
  );
};

const FormOtp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const userId = searchParams.get("userId")!;

  const form = useForm<z.infer<typeof formSchemaOtp>>({
    resolver: zodResolver(formSchemaOtp),
    defaultValues: {
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchemaOtp>) {
    try {
      const session = await loginUser(userId, values.password);

      if (session) {
        router.push(`/consultations/${userId}`);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Insira a senha enviada no seu e-mail</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="flex flex-col gap-y-4 m-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                )}
              />
              <SubmitButton className="bg-cyan-600 hover:bg-cyan-800">
                Entrar
              </SubmitButton>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
