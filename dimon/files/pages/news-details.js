import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import NewsDetails from "../components/NewsDetails";
import Footer from "../components/Footer";

const NewsDetailsPage = () => (

    <Layout pageTitle="Dimon | News Details">
        <NavTwo />
        <PageHeader title="News Details" />
        <NewsDetails />
        <Footer />
    </Layout>

)

export default NewsDetailsPage;