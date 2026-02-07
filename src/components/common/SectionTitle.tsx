import { Typography } from "@mui/material";

interface SectionTitleProps {
  title: string;
}

/**
 * Section Title Component
 * Clean, minimalist design with subtle accent
 */
const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Typography
      variant="h4"
      sx={(theme) => ({
        textAlign: 'center',
        color: 'primary.main',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
        position: 'relative',
        mb: { xs: 4, sm: 5, md: 6 },
        pb: 3,
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: '50px', sm: '60px' },
          height: '3px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          borderRadius: '2px',
        },
      })}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
