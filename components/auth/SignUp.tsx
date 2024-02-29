"use client";

import { useCreateUserMutation } from "@/app/api/userApi";
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
import { isEmail, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {  useEffect, useMemo, useState } from "react";

const SignUp = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [match, setMatch] = useState<null | boolean>(null);

  const [createUser, { data, status, error, isLoading }] =
    useCreateUserMutation();

  useEffect(() => {
    switch (status) {
      case "rejected":
        console.log(error);
        break;
      case "pending":
        console.log("pending");
        break;
      case "fulfilled":
        {
          dispatch(userSlice.actions.setAuthStatus(true));
          console.log(data, "SWITCH");
          dispatch(userSlice.actions.setUserData(data));
          setTimeout(() => close(), 1200);
        }
        break;
      default:
        null;
        break;
    }
  }, [status]);

  // const [open, setOpen] = useState<boolean>(true)
  const dispatch = useDispatch();
  const portal = useSelector(selectPortal);
  const isSuccess = useSelector(selectStatus);

  const handleClose = () => {
    close();
    dispatch(layoutSlice.actions.setPortal(null));
  };

  const createJson = async () => {
    try {
      const draft = { ...form.values };
      draft.username = draft.un;
      draft.password = draft.pw;
      draft.description = draft.pn;
      draft.email = draft.em;
      delete draft.un;
      delete draft.pw;
      delete draft.pn;
      delete draft.cp;
      delete draft.em;
      console.log(draft);
      // const toJson = JSON.stringify(draft);
      // console.log(toJson);
      await createUser(draft);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAuth = () => {
    console.log("SUBMIT");
    const credentialsBase64 = "bW0ucmF5OnpSTnJIb0VLakJNd1YqMWoyeEhMKWFocQ==";
    dispatch(userSlice.actions.setHeaders(credentialsBase64));
    createJson();
  };

  const form = useForm<any>({
    validateInputOnBlur: true,
    initialValues: {
      un: "TEST1",
      pn: "09308043708",
      pw: "TestTest",
      cp: "TestTest",
      em: "Test1@yahoo.com",
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
      pn: (value) => !phoneRegex.test(value) && "شماره همراه نامعتبر است",
      pw: (value) =>
        !charactersRegex.test(value)
          ? "تنها از حروف انگلیسی و سمبل ها استفاده کنید"
          : !lengthRegex.test(value)
          ? "طول رمز عبور باید بین 8 تا 25 کاراکتر باشد."
          : !caseRegex.test(value)
          ? "رمز عبور میبایست شامل حداقل یک حرف بزرگ و یک حرف کوچک باشد."
          : null,
      cp: () => !match && "رمز عبور با تکرار آن مطابقت ندارد",
      em: isEmail("چنین ایمیلی وجود ندارد"),
    },
  });

  useEffect(() => {
    console.log(portal, "in effect");
    if (portal === "signup") {
      console.log("open");
      open();
    } else {
      console.log("close");
      close();
    }
  }, [portal]);

  useEffect(() => {
    if (form.values.cp === form.values.pw) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }, [form.values.cp, form.values.pw]);

  const lengthRegex = /^.{8,25}$/;
  const caseRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
  const charactersRegex = /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;
  const phoneRegex = /^09\d{9}$/;

  return (
    <>
      <Modal title="ثبت نام" onClose={handleClose} opened={opened} centered>
        <form
          onSubmit={form.onSubmit(() => {
            console.log("SUBMIT1");
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
            <TextInput
              size="md"
              label="ایمیل"
              autoComplete="off"
              radius="md"
              {...form.getInputProps("em")}
            />

            <TextInput
              autoComplete="off"
              label="شماره همراه"
              size="md"
              radius="md"
              {...form.getInputProps("pn")}
            />

            <PasswordInput
              autoComplete="off"
              label="رمز عبور"
              size="md"
              radius="md"
              {...form.getInputProps("pw")}
            />
            <PasswordInput
              autoComplete="off"
              label="تکرار رمز عبور"
              size="md"
              radius="md"
              {...form.getInputProps("cp")}
            />
          </Stack>
          <Stack>
            <Button
              color={isSuccess ? "green" : "blue"}
              loading={isLoading}
              type="submit"
            >
              {isSuccess ? "با موفقیت انجام شد" : "ثبت نام"}
            </Button>

            <Group
              justify="space-between"
              gap={5}
              className="border-t-2  border-gray-100 pt-5 mt-5"
            >
              {/* <Text className="cursor-pointer" size="sm" c="blue">
                بازیابی رمز عبور
              </Text> */}
              <Text
                onClick={() => dispatch(layoutSlice.actions.setPortal("login"))}
                className="cursor-pointer"
                size="sm"
                c="blue"
              >
                آیا حساب کاربری دارید؟
              </Text>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};

export default SignUp;
