import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import FXTextarea from "../form/FXTextarea";
import FXModal from "./FXModal";

interface IProps {
  id: string;
  questions: string[];
}

const ClaimRequestModal = ({ id, questions }: IProps) => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FXModal
      buttonClassName="flex-1"
      buttonText="Claim Request"
      title="Claim Request"
    >
      <FXForm onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div className="mb-4" key={index}>
            <p className="mb-1">{question}</p>
            <FXInput
              label={`Answer - ${index + 1}`}
              name={`Answer - ${index + 1}`}
            />
          </div>
        ))}
        <FXTextarea name="description" label="Description" />
        <div>
          <Button className="flex-1 my-2 w-full" size="lg" type="submit">
            Send
          </Button>
        </div>
      </FXForm>
    </FXModal>
  );
};

export default ClaimRequestModal;
