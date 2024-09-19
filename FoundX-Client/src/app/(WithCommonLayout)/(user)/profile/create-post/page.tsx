"use client";

import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

const CreatePost = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((ques: { value: string }) => ques.value),
    };
    console.log(postData);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  return (
    <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
      <h1 className="text-2xl font-semibold">Post a found item</h1>
      <Divider className="mb-5 mt-3" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXInput name="title" label="Title" />
            </div>
            <div className="min-w-fit flex-1">
              <FXDatePicker label="Found Date" name="dateFound" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXInput name="title" label="Location" />
            </div>
            <div className="min-w-fit flex-1">
              <FXInput name="title" label="City" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXInput name="title" label="Category" />
            </div>
            <div className="min-w-fit flex-1">
              <FXInput name="title" label="Upload Image" />
            </div>
          </div>

          <Divider className="my-5" />

          <div className="flex justify-between items-center">
            <h1>Owner Verification Questions</h1>
            <Button onClick={() => handleFieldAppend()}>Append</Button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center">
              <FXInput name={`questions.${index}.value`} label="Question" />
              <Button onClick={() => remove(index)}>Remove</Button>
            </div>
          ))}

          <Divider className="my-5" />

          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
