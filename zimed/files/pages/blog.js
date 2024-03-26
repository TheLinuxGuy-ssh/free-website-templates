import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Blog from "../components/Blog";
import Footer from "../components/Footer";


const BlogPage = () => (

    <Layout pageTitle="Zimed | Blog">
        <Navbar />
        <PageHeader title="Blog" />
        <Blog />
        <Footer />
    </Layout>

)

export default BlogPage;