import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import BlogDetails from "../components/BlogDetails";
import Footer from "../components/Footer";



const BlogDetailPage = () => (

    <Layout pageTitle="Zimed - Blog Details">
        <Navbar />
        <PageHeader title="Blog Details" />
        <BlogDetails />
        <Footer />
    </Layout>

)

export default BlogDetailPage;