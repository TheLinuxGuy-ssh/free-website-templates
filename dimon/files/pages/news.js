import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import News from "../components/News";
import Footer from "../components/Footer";



const NewsPage = () => (

    <Layout pageTitle="Dimon | News">
        <NavTwo />
        <PageHeader title="News" />
        <News />
        <Footer />
    </Layout>

)

export default NewsPage;