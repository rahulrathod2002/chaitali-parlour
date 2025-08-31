import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActionArea,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import matter from 'gray-matter';

const Blog = () => {
    const theme = useTheme();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postModules = import.meta.glob('../data/blogs/*.md', { as: 'raw' });
            const postPromises = Object.entries(postModules).map(async ([path, resolver]) => {
                const rawContent = await resolver();
                const { data } = matter(rawContent);
                const slug = path.split('/').pop().replace('.md', '');
                return { ...data, slug, date: new Date(data.date) };
            });
            const fetchedPosts = await Promise.all(postPromises);
            fetchedPosts.sort((a, b) => b.date - a.date);
            setPosts(fetchedPosts);
        };
        fetchPosts();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <SEOHead
                title="Beauty Blog | Chaitali Parlour Pune"
                description="Read the latest beauty tips, professional hair care advice, and skin care trends from the experts at Chaitali Beauty Parlour in Pune."
                keywords="beauty blog, hair care tips, skin care advice, makeup trends, beauty news, ladies parlour Pune, professional hair care Pune"
                canonical="https://chaitali-parlour.netlify.app/blog"
            />
            <Box sx={{ pt: 12, pb: 8, bgcolor: theme.palette.background.default }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4 }}>
                        Our Beauty Blog
                    </Typography>
                    <Grid container spacing={4}>
                        {posts.map((post) => (
                            <Grid item xs={12} sm={6} md={4} key={post.slug}>
                                <motion.div whileHover={{ y: -5 }} style={{ height: '100%' }}>
                                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardActionArea component={RouterLink} to={`/blog/${post.slug}`} sx={{ flexGrow: 1 }}>
                                            <CardContent>
                                                <Typography variant="h5" component="div" gutterBottom sx={{ fontFamily: 'Cormorant Garamond' }}>
                                                    {post.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                    By {post.author} on {post.date.toLocaleDateString()}
                                                </Typography>
                                                <Typography variant="body1">
                                                    {`${post.body.substring(0, 100)}...`}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
};

export default Blog;