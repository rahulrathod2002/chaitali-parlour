import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    useTheme,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { blogPosts } from '../data/blog'; // Ensure this is imported
import NotFound from './NotFound'; // Import NotFound for handling missing posts

const Blog = () => {
    const theme = useTheme();
    const location = useLocation();
    const blogSlug = location.pathname.split('/').pop();
    const isSinglePost = blogSlug !== 'blog';
    const post = blogPosts.find(p => p.slug === blogSlug);

    if (isSinglePost && !post) {
        return <NotFound />;
    }

    const BlogPostCard = ({ post }) => (
        <motion.div
            initial={ { y: 50, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            viewport={ { once: true, amount: 0.3 } }
            transition={ { duration: 0.5 } }
        >
            <Card sx={ { height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: theme.shadows[ 1 ] } }>
                <CardMedia
                    component="img"
                    height="200"
                    image={ post.image }
                    alt={ post.title }
                    sx={ { objectFit: 'cover' } }
                />
                <CardContent sx={ { flexGrow: 1 } }>
                    <Typography gutterBottom variant="h5" component="div" sx={ { fontFamily: 'Cormorant Garamond' } }>
                        { post.title }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={ { mb: 1 } }>
                        { post.excerpt }
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                        { post.author } on { post.date }
                    </Typography>
                </CardContent>
                <Box sx={ { p: 2, pt: 0 } }>
                    <Button component={ RouterLink } to={ `/blog/${post.slug}` } variant="outlined" color="primary" fullWidth>
                        Read More
                    </Button>
                </Box>
            </Card>
        </motion.div>
    );

    const SinglePostView = ({ post }) => (
        <Container maxWidth="md">
            <motion.div
                initial={ { y: 50, opacity: 0 } }
                animate={ { y: 0, opacity: 1 } }
                transition={ { duration: 0.7 } }
            >
                <CardMediaWithFallback
                    component="img"
                    src={ post.image }
                    alt={ post.title }
                    sx={ { height: { xs: 200, sm: 300, md: 400 }, objectFit: 'cover', borderRadius: 3, mb: 4, boxShadow: theme.shadows[ 1 ] } }
                />
                <Typography variant="h2" gutterBottom sx={ { color: theme.palette.text.primary } }>
                    { post.title }
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" paragraph>
                    By { post.author } on { post.date }
                </Typography>
                <Typography variant="body1" component="div" sx={ { lineHeight: 1.8 } }>
                    { post.content.split('\n').map((paragraph, index) => (
                        <p key={ index } dangerouslySetInnerHTML={ { __html: paragraph } } />
                    )) }
                </Typography>
                <Box sx={ { mt: 4 } }>
                    <Button component={ RouterLink } to="/blog" variant="outlined" color="primary">
                        Back to Blog
                    </Button>
                </Box>
            </motion.div>
        </Container>
    );

    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5 } }
        >
            <SEOHead
                title={ isSinglePost ? `${post.title} | Chaitali Parlour Blog` : "Blog | Chaitali Parlour - Beauty & Skincare Tips" }
                description={ isSinglePost ? post.excerpt : "Discover expert beauty tips, skincare advice, and hair care guides from Chaitali Parlour's blog." }
                keywords={ isSinglePost ? `${post.title.toLowerCase()}, ${post.author.toLowerCase()}, beauty tips, skincare, hair care` : "beauty blog, skincare tips, hair care tips, beauty advice, parlour blog pune" }
                canonical={ isSinglePost ? `https://www.chaitaliparlour.com/blog/${post.slug}` : "https://www.chaitaliparlour.com/blog" }
                structuredData={ isSinglePost ? {
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "image": post.image,
                    "datePublished": new Date(post.date).toISOString(),
                    "author": {
                        "@type": "Person",
                        "name": post.author
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Chaitali Parlour",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://placehold.co/60x60/FFC0CB/FFFFFF?text=Logo"
                        }
                    },
                    "description": post.excerpt,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://www.chaitaliparlour.com/blog/${post.slug}`
                    }
                } : {
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "name": "Chaitali Parlour Blog",
                    "description": "Expert beauty tips, skincare advice, and hair care guides.",
                    "blogPost": blogPosts.map(bp => ({
                        "@type": "BlogPosting",
                        "headline": bp.title,
                        "image": bp.image,
                        "url": `https://www.chaitaliparlour.com/blog/${bp.slug}`,
                        "datePublished": new Date(bp.date).toISOString(),
                        "author": { "@type": "Person", "name": bp.author },
                        "publisher": { "@type": "Organization", "name": "Chaitali Parlour" }
                    }))
                } }
            />
            <Box sx={ { pt: 12, pb: 8, bgcolor: theme.palette.background.default } }>
                { isSinglePost ? (
                    <SinglePostView post={ post } />
                ) : (
                    <Container maxWidth="lg">
                        <motion.div
                            initial={ { y: 50, opacity: 0 } }
                            animate={ { y: 0, opacity: 1 } }
                            transition={ { duration: 0.7 } }
                        >
                            <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 2 } }>
                                Our Beauty Blog
                            </Typography>
                            <Typography variant="body1" align="center" color="text.secondary" paragraph sx={ { mb: 6 } }>
                                Expert advice, tips, and insights for your beauty journey.
                            </Typography>
                        </motion.div>

                        <Grid container spacing={ 4 } justifyContent="center">
                            { blogPosts.map((blogPost, index) => (
                                <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ blogPost.id }>
                                    <BlogPostCard post={ blogPost } />
                                </Grid>
                            )) }
                        </Grid>
                    </Container>
                ) }
            </Box>
        </motion.div>
    );
};

export default Blog;
