import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//LAYOUTS
import { Layout } from "../Layout";
import { KnowledgeBaseLayout } from "../Layout/knowledgeBaseLayout";
import { CalculatorsLayout } from "../Layout/calculatorsLayout";
//MAIN PAGES
import Home from "../pages/homePage/HomePage";
import HelplinePage from "../pages/helplinePage/HelplinePage";
import CKEPage from "../pages/CKEPages/CKEPage";
import KnowledgeBasePage from "../pages/knowledgeBasePages/KnowledgeBasePage";
import WorkInProgress from "../components/WorkInProgress/WorkInProgress";
import CalculatorsPage from "../pages/calculatorsPages/CalculatorsPage";
import CoffeePage from "../pages/CoffeePage/CoffeePage";
import LoginPage from "../pages/loginPages/LoginPage";
import ForumPage from "../pages/forumPages/ForumPage";
import RegistrationPage from "../pages/loginPages/RegistrationPage";
import ResetPasswordPage from "../pages/loginPages/ResetPasswordPage";
import PrivacyPolicyPage from "../pages/privacyPolicyPage/PrivacyPolicyPage";
import AccountPage from "../pages/accountPages/AccountPage";
import PrivateRoute from "../components/routeComponents/PrivateRoute";
import MyAccountRoute from "../components/routeComponents/MyAccountRoute";
import NewPostForm from "../pages/forumPages/NewPostFormPage/NewPostFormPage";
import { ForumLayout } from "../Layout/forumLayout";
import PostDetailPage from "../pages/forumPages/PostDetailPage/PostDetailPage";
import { knowledgeBaseRoutes } from "./KnowledgeBaseRoutes";
import { calculatorRoutes } from "./CalculatorsRoutes";
import ActivatePremiumPage from "../pages/accountPages/ActivatePremiumPage";
import ScrollToTop from "../components/routeComponents/ScrollToTop";
import MaturaExercisesPage from "../pages/maturaExercises/MaturaExercisesPage";
import { MaturaExercisesLayout } from "../Layout/maturaExercisesLayout";
import NewExerciseFormPage from "../pages/maturaExercises/NewExerciseFormPage/NewExerciseFormPage";
import ExerciseDetailPage from "../pages/maturaExercises/PostDetailPage/ExerciseDetailPage";

export const Router: FC = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="baza-wiedzy" element={<KnowledgeBaseLayout />}>
                        <Route index element={<KnowledgeBasePage />} />
                        {knowledgeBaseRoutes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                        <Route path="*" element={<WorkInProgress />} />
                    </Route>
                    <Route path="kalkulatory" element={<CalculatorsLayout />}>
                        <Route index element={<CalculatorsPage />} />
                        {calculatorRoutes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                        <Route path="*" element={<WorkInProgress />} />
                    </Route>
                    <Route element={<MyAccountRoute />}>
                        <Route path="logowanie" element={<LoginPage />} />
                    </Route>
                    <Route element={<MyAccountRoute />}>
                        <Route path="rejestracja" element={<RegistrationPage />} />
                    </Route>
                    <Route path="odzyskiwanie-hasla" element={<ResetPasswordPage />} />
                    <Route path="polityka-prywatnosci" element={<PrivacyPolicyPage />} />
                    <Route path="zadania-maturalne" element={<MaturaExercisesLayout />}>
                    <Route index element={<MaturaExercisesPage />} />
                    <Route path="nowe-zadanie" element={<NewExerciseFormPage />} />
                    <Route path="exercise/:id" element={<ExerciseDetailPage />} />
                    </Route>
                    <Route path="forum" element={<ForumLayout />}>
                        <Route index element={<ForumPage />} />
                        <Route path="nowy-watek" element={<NewPostForm />} />
                        <Route path="topic/:id" element={<PostDetailPage />} />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="moje-konto" element={<AccountPage />} />
                        <Route path="premium" element={<ActivatePremiumPage />} />
                    </Route>
                    <Route path="cke" element={<CKEPage />} />
                    <Route path="wsparcie" element={<CoffeePage />} />
                    <Route path="pogotowie" element={<HelplinePage />} />
                    <Route path="*" element={<WorkInProgress />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}