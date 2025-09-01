import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    useTheme,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { blogPosts } from '../data/blog';
import CardMediaWithFallback from '../components/common/CardMediaWithFallback';
import ReactMarkdown from 'react-markdown';
import { Close as CloseIcon } from '@mui/icons-material';

const Blog = () => {
    const theme = useTheme();
    const [ open, setOpen ] = useState(false);
    const [ selectedPost, setSelectedPost ] = useState(null);

    const handleOpen = (post) => {
        setSelectedPost(post);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedPost(null);
    };

    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5 } }
        >
            <SEOHead
                title="Beauty Blog | Chaitali Parlour Pune"
                description="Read the latest beauty tips, professional hair care advice, and skin care trends from the experts at Chaitali Beauty Parlour in Pune."
                keywords="beauty blog, hair care tips, skin care advice, makeup trends, beauty news, ladies parlour Pune, professional hair care Pune"
                canonical="https://chaitali-parlour.netlify.app/blog"
            />
            <Box sx={ { pt: 12, pb: 8, bgcolor: theme.palette.background.default } }>
                <Container maxWidth="lg">
                    <Typography variant="h2" align="center" gutterBottom sx={ { mb: 4 } }>
                        Our Beauty Blog
                    </Typography>
                    <Grid container spacing={ 4 }>
                        { blogPosts.map((post) => (
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ post.slug }>
                                <motion.div whileHover={ { y: -5 } } style={ { height: '100%' } }>
                                    <Card sx={ { height: '100%', display: 'flex', flexDirection: 'column', boxShadow: theme.shadows[ 3 ] } }>
                                        <CardMediaWithFallback
                                            component="img"
                                            sx={ { height: 140 } }
                                            src={ post.image }
                                            alt={ post.title }
                                        />
                                        <CardContent sx={ { flexGrow: 1 } }>
                                            <Typography variant="h5" component="div" gutterBottom sx={ { fontFamily: 'Cormorant Garamond' } }>
                                                { post.title }
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={ { mb: 1 } }>
                                                By { post.author } on { post.date }
                                            </Typography>
                                            <Typography variant="body1">
                                                { post.excerpt }
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={ () => handleOpen(post) } size="small" sx={ { '&:hover': { boxShadow: theme.shadows[ 5 ] } } }>Read More</Button>
                                        </CardActions>
                                    </Card>
                                </motion.div>
                            </Grid>
                        )) }
                    </Grid>
                </Container>
            </Box>
            { selectedPost && (
                <Dialog
                    open={ open }
                    onClose={ handleClose }
                    scroll="paper"
                    maxWidth="lg"
                    fullWidth
                    PaperProps={ {
                        sx: {
                            borderRadius: 3,
                            p: { xs: 2, sm: 4 },
                            backgroundColor: 'background.paper',
                            boxShadow: 12,
                            maxHeight: '90vh', // prevents dialog from exceeding viewport
                        }
                    } }
                >
                    <DialogTitle
                        sx={ {
                            fontFamily: 'Cormorant Garamond',
                            fontSize: { xs: '2rem', sm: '2.5rem' },
                            fontWeight: 'bold',
                            pb: 1,
                            position: 'relative',
                        } }
                    >
                        { selectedPost.title }
                        <IconButton
                            aria-label="close"
                            onClick={ handleClose }
                            sx={ {
                                position: 'absolute',
                                right: 16,
                                top: 16,
                                color: (theme) => theme.palette.grey[ 500 ],
                            } }
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>

                    <DialogContent
                        dividers
                        sx={ {
                            px: { xs: 1, sm: 3 },
                            py: { xs: 1, sm: 2 },
                            '&::-webkit-scrollbar': { width: '6px' },
                            '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 3 },
                            '& h1, & h2, & h3, & h4': { margin: '1.5rem 0 1rem', fontWeight: 600 },
                            '& p': { lineHeight: 1.8, mb: 2, wordBreak: 'break-word', overflowWrap: 'break-word' },
                            '& a': { color: theme.palette.secondary.main, textDecoration: 'underline' },
                            '& ul, & ol': { pl: 4, mb: 2 },
                            '& li': { mb: 1.2 },
                            fontSize: { xs: '0.95rem', sm: '1rem' },
                        } }
                    >
                        <Typography variant="subtitle2" color="text.secondary" sx={ { mb: 3 } }>
                            By { selectedPost.author } on { selectedPost.date }
                        </Typography>
                        <ReactMarkdown>{ selectedPost.content }</ReactMarkdown>
                    </DialogContent>

                    <DialogActions sx={ { px: { xs: 2, sm: 3 }, py: { xs: 1, sm: 2 } } }>
                        <Button variant="contained" color="primary" onClick={ handleClose }>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            ) }

        </motion.div>
    );
};

export default Blog;