"use client";
import React, { useLayoutEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { Button } from "@mantine/core";
import * as S from "../components/Home/Signin.style";
import { useRouter } from "next/router";
const Signin = () => {
  const router = useRouter();
  const { data } = useSession();

  return (
    <S.SignInWrapper>
      {(data &&
        data.user &&
        process.env.NEXT_PUBLIC_ADMIN_EMAIL.split(",").includes(
          data?.user.email!
        ) && (
          <Button
            variant="filled"
            onClick={async () => router.replace("/dashboard")}
            radius={"lg"}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {`View dashboard ${data.user.name}`}
          </Button>
        )) || (
        <Button
          variant="filled"
          onClick={async () => await signIn("google")}
          radius={"lg"}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          Sign in with Google
        </Button>
      )}
    </S.SignInWrapper>
  );
};
export default Signin;
