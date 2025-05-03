"use client";
import React, { useLayoutEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mantine/core";
import * as S from "../components/Home/Signin.style";
import { useRouter } from "next/router";
const Signin = () => {
  const router = useRouter();
  const { data } = useSession();
  useLayoutEffect(() => {
    if (data?.user) {
      if (
        process.env.NEXT_PUBLIC_ADMIN_EMAIL.split(",").includes(
          data.user.email!
        )
      ) {
        router.replace("/dashboard");
      } else {
        router.replace("/401");
      }
    }
  });
  return (
    <S.SignInWrapper>
      <Button
        variant="filled"
        onClick={async () => await signIn("google")}
        radius={"lg"}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        Sign in with Google
      </Button>
    </S.SignInWrapper>
  );
};
export default Signin;
