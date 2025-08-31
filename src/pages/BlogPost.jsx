import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    useTheme,
    CircularProgress,
    Breadcrumbs,
    Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const BlogPost = () => {
    const theme = useTheme();
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postModule = await import(`../data/blogs/${slug}.md?raw`);
                const { data, content } = matter(postModule.default);
                setPost({ frontmatter: data, content });
            } catch (e) {
                console.error('Error fetching post:', e);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);

    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></Box>;
    }

    if (!post) {
        return <Typography>Post not found.</Typography>; // Or a proper 404 component
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <SEOHead
                title={`${post.frontmatter.title} | Chaitali Parlour Blog`}
                description={post.content.substring(0, 160)}
            />
            <Box sx={{ pt: 12, pb: 8, bgcolor: theme.palette.background.paper }}>
                <Container maxWidth="md">
                    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
                        <Link component={RouterLink} underline="hover" color="inherit" to="/">
                            Home
                        </Link>
                        <Link component={RouterLink} underline="hover" color="inherit" to="/blog">
                            Blog
                        </Link>
                        <Typography color="text.primary">{post.frontmatter.title}</Typography>
                    </Breadcrumbs>

                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontFamily: 'Cormorant Garamond' }}>
                        {post.frontmatter.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
                        By {post.frontmatter.author} on {new Date(post.frontmatter.date).toLocaleDateString()}
                    </Typography>
                    <Box sx={{
                        '& h2': { ...theme.typography.h4, margin: '2rem 0 1rem 0' },
                        '& h3': { ...theme.typography.h5, margin: '1.5rem 0 1rem 0' },
                        '& p': { ...theme.typography.body1, lineHeight: 1.7, margin: '1rem 0' },
                        '& a': { color: theme.palette.secondary.main },
                        '& ul, & ol': { pl: 3 },
                        '& li': { mb: 1 },
                    }}>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </Box>
                </Container>
            </Box>
        </motion.div>
    );
};

export default BlogPost;
