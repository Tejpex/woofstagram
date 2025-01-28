import { View, ScrollView, Text, TextInput, Button } from "react-native"
import { Formik } from "formik"

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          petName: "",
          birthday: "",
          breed: "",
          toy: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "yellowgreen",
              padding: 16,
            }}
          >
            <Heading text="Account details" />
            <InputField
              label="E-mail:"
              placeholder="your e-mail"
              value={values.email}
              func={handleChange("email")}
            />
            <InputField
              label="Password:"
              placeholder="password"
              value={values.password}
              func={handleChange("password")}
              secure
            />
            <InputField
              label="Confirm password:"
              placeholder="password"
              func={(text) => confirmPasswordsMatch(text, values.password)}
              secure
            />
            <Heading text="Information about your pet" />
            <InputField
              label="Name:"
              placeholder="pet name"
              value={values.petName}
              func={handleChange("petName")}
            />
            <InputField
              label="Birthday:"
              placeholder="yyyy-mm-dd"
              value={values.birthday}
              func={handleChange("birthday")}
            />
            <InputField
              label="Breed:"
              placeholder="pet breed"
              value={values.breed}
              func={handleChange("breed")}
            />
            <InputField
              label="Favorite toy:"
              placeholder="toy"
              value={values.toy}
              func={handleChange("toy")}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </ScrollView>
        )}
      </Formik>
    </View>
  )
}

export default App

function confirmPasswordsMatch(confirmation, original) {
  if (confirmation !== original) {
    alert("Passwords do not match, please try again.")
  }
}

export const InputField = (props) => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 4 }}>{props.label}</Text>
      <TextInput
        id="input"
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.func}
        secureTextEntry={props.secure ? true : false}
        style={{
          backgroundColor: "#fff",
          borderRadius: 15,
          margin: 3,
          padding: 8,
          borderWidth: 1,
          borderColor: "#ccc",
        }}
      />
    </View>
  )
}

export const Heading = (props) => {
  return <Text style={{ fontSize: 24, fontWeight: "bold" }}>{props.text}</Text>
}
