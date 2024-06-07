import {
    Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  ImageList,
  TextField,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputFileUpload from "../../components/card/upload/Upload";
import { bookSchema } from "../book/[id]/book.validation";
import { localization } from "../../constants/localization";
import { useState } from "react";
import { postProduct } from "../../api/products.api";

type CeateBookForm = {
  titleBook: string;
  descriptionBook: string;
  priceBook: string;
  isOpen: boolean;
};

function Dashboard() {
  const [urlImage, setUrlImage] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CeateBookForm>({
    context: {
      min: 18,
      max: 22,
    },
  });
  const handleCreateBook: SubmitHandler<CeateBookForm> = (data) => {
    postProduct({
      name: data.titleBook,
      id: Date.now(),
      detail: data.descriptionBook,
      price: data.priceBook,
      imageURL: urlImage,
    });
  };

  function uploadImage(e) {
    const file = e.target.files[0];
    console.log("لبیای");

    const reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);
      setUrlImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <Box>
      <Card>
        <CardContent>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
  Here is a gentle confirmation that your action was successful.
</Alert>
          <CardHeader title={localization.addRashedBooksGallery} />
          <form onSubmit={handleSubmit(handleCreateBook)}>
            <Grid container spacing={2} item xs={12} md={6}>
              <Grid item xs={12}>
                <TextField
                  {...register("titleBook")}
                  fullWidth
                  helperText={errors.titleBook?.message}
                  error={!!errors.titleBook}
                  label={localization.nameBook}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("descriptionBook")}
                  fullWidth
                  label={localization.descriptionBook}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("priceBook")}
                  fullWidth
                  label={localization.priceBook}
                />
              </Grid>

              <Grid item xs={12}>
                <InputFileUpload
                  buttonProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: (e) => uploadImage(e),
                    name: "image",
                  }}
                >
                  آپلود تصویر راشد جانا
                </InputFileUpload>
                <img src={urlImage} alt="" className="w-24 m-auto mt-4 rounded-md" />
                <input type="file" />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  {localization.addBook}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Dashboard;
