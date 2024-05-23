import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";

const loginSchema = z
  .object({
    EMAIL_ID: z
      .string()
      .min(1, "Please provide an E-Mail ID")
      .email({ message: "Please provide a valid E-Mail ID" }),
    PASSWORD: z.string(),
  })
  .strict();

export const LoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      EMAIL_ID: "",
      PASSWORD: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    if (
      data.EMAIL_ID === "aaditya.v@4iapps.com" &&
      data.PASSWORD === "abcd1234"
    ) {
      Cookies.set("NAME", "Aaditya");
      navigate({
        to: "/compare",
      });
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="EMAIL_ID"
          render={({ field }) => (
            <FormItem className="relative z-0 mt-5 pt-2">
              <FormControl>
                <Input
                  {...field}
                  className="block py-2.5 px-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-slate-700 peer"
                  placeholder=" "
                />
              </FormControl>
              <FormLabel className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-1 left-2 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-slate-950 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                E-Mail ID
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="PASSWORD"
          render={({ field }) => (
            <FormItem className="relative z-0 mt-5 pt-2">
              <FormControl>
                <Input
                  {...field}
                  className="block py-2.5 px-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-slate-700 peer"
                  placeholder=" "
                  type="password"
                />
              </FormControl>
              <FormLabel className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-1 left-2 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-slate-950 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Password
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="m-5 ml-0 mr-0 self-auto">
          <Button type="submit" variant={"outline"} className="w-full">
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
};
