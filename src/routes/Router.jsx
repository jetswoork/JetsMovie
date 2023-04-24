import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar, NavbarPrivate } from "../components";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";
import { onLogin } from "../redux/slices/auth/authSlice";
import { More } from "../screens/more";
import { Profile } from "../screens/Profile";
import { ProfileEdit } from "../screens/ProfileEdit";
import { Welcome } from "../screens/Welcome";
import { Recovery } from "../screens/recovery";
import { ResetPassword } from "../screens/resetPassword";
import { ResetSuccessful } from "../screens/resetSuccessful";
import { Home, Login, Register, Search } from "../screens";
import { MovieScreen } from "../screens/MovieScreen";

export const Router = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  if (status === "checking") return <Loader />;
  const token = localStorage.getItem("token");
  if (token) dispatch(onLogin());

  return (
    <Fragment>
      {status === "authenticated" ? <NavbarPrivate /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/welcome" element={<Welcome />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/more/*" element={<More />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/recovery/reset" element={<ResetPassword />} />
        <Route
          path="/recovery/reset/successful"
          element={<ResetSuccessful />}
        />
      </Routes>

      <Footer />
    </Fragment>
  );
};
