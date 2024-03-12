"use client";

import { useGetCurrentUserQuery } from "@/app/api/userApi";
import { layoutSlice, useDispatch, useSelector } from "@/lib/redux";
import { selectPortal } from "@/lib/redux/slices/layoutSlice/selectors";
import { selectStatus } from "@/lib/redux/slices/userSlice/selectors";
import { userSlice } from "@/lib/redux/slices/userSlice/userSlice";
import {
  Button,
  Group,
  Modal,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useCallback, useEffect, useMemo, useState } from "react";

const Login = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [skip, setSkip] = useState<boolean>(true);

  const isSuccess = useSelector(selectStatus);
  const portal = useSelector(selectPortal);

  const dispatch = useDispatch();

  // const [open, setOpen] = useState<boolean>(true)

  const { data, status, isError, isLoading, error } = useGetCurrentUserQuery(
    null,
    {
      skip,
    }
  );

  useEffect(() => {
    switch (status) {
      case "rejected":
        null;
        break;
      case "pending":
        null;
        break;
      case "fulfilled":
        {
          dispatch(userSlice.actions.setAuthStatus(true));
          console.log(data, "SWITCH");
          setSkip(true);
          dispatch(userSlice.actions.setUserData(data));
          setTimeout(() => {
            close()
            dispatch(layoutSlice.actions.setPortal(null))
          }, 1200);

        }
        break;
      default:
        null;
        break;
    }

    // if (isSuccess === true) {
    //   setSkip(true);
    // }
  }, [status]);

  const handleClose = () => {
    close();
    dispatch(layoutSlice.actions.setPortal(null));
  };

  useEffect(() => {
    console.log(portal, "in effect");
    if (portal === "login") {
      console.log("open");
      open();
    } else {
      console.log("close");
      close();
    }
  }, [portal]);

  const lengthRegex = /^.{8,25}$/;
  const caseRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
  const charactersRegex = /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;

  const form = useForm<{ un: string; pw: string }>({
    validateInputOnBlur: true,
    initialValues: {
      un: "mm.ray2",
      pw: "ekjG2SS)WH8HVVdKGOkCmAdt",
    },
    validate: {
      un: (value) =>
        value.length < 4
          ? "تعداد کاراکتر های نام کاربری می‌بایست بیش از 4 باشد."
          : value.length > 20
          ? "تعداد کاراکتر های نام کاربری می‌بایست کمتر از 20 باشد."
          : !charactersRegex.test(value)
          ? "تنها از حروف انگلیسی و سمبل ها استفاده کنید"
          : null,
      pw: (value) =>
        !charactersRegex.test(value)
          ? "تنها از حروف انگلیسی و سمبل ها استفاده کنید"
          : !lengthRegex.test(value)
          ? "طول رمز عبور باید بین 8 تا 25 کاراکتر باشد."
          : !caseRegex.test(value)
          ? "رمز عبور میبایست شامل حداقل یک حرف بزرگ و یک حرف کوچک باشد."
          : null,
    },
  });

  const encoder = new TextEncoder();
  const credentials = Array.from(
    encoder.encode(`${form.values.un}:${form.values.pw}`)
  );

  const handleAuth = () => {
    console.log(credentials, "TOKEN");

    const credentialsBase64 = btoa(
      String.fromCharCode.apply(null, credentials)
    );
    console.log(credentialsBase64, "sent to rtk");
    dispatch(userSlice.actions.setHeaders(credentialsBase64));
    // getCurrentUser();
    setSkip(false);
  };

  return (
    <>
      <Modal title="وارد شوید" onClose={handleClose} opened={opened} centered>
        <form
          onSubmit={form.onSubmit(() => {
            console.log("SUBMIT");
            handleAuth();
          })}
          className="mx-5 gap-16 flex flex-col"
        >
          <Stack pt={30}>
            <TextInput
              size="md"
              label="نام کاربری"
              autoComplete="off"
              radius="md"
              {...form.getInputProps("un")}
            />
            <PasswordInput
              autoComplete="off"
              label="رمز عبور"
              size="md"
              radius="md"
              {...form.getInputProps("pw")}
            />
          </Stack>
          <Stack>
            <Button
            variant="light"
              color={isSuccess ? "green" : "blue"}
              loading={isLoading}
              type="submit"
            >
              {isSuccess ? "وارد شدید" : "ورود"}
            </Button>

            <Group
              justify="space-between"
              gap={5}
              className="border-t-2 px-10 border-gray-100 pt-5 mt-5"
            >
              <Text className="cursor-pointer" size="sm" c="blue">
                بازیابی رمز عبور
              </Text>
              <Text
                onClick={() =>
                  dispatch(layoutSlice.actions.setPortal("signup"))
                }
                className="cursor-pointer"
                size="sm"
                c="blue"
              >
                ایجاد حساب کاربری
              </Text>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};

export default Login;
