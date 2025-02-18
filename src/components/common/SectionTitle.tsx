import { Typography } from "@mui/material";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Typography
      variant="h4"
      sx={(theme: any) => ({
        textAlign: 'center',
        color: 'primary.main',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: theme.spacing(0.1),
        position: 'relative',
        animation: 'slideIn 1s ease-out',
        '@keyframes slideIn': {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: theme.spacing(-1),
          left: '50%',
          transform: 'translateX(-50%)',
          width: '2em',
          height: '2px',
          bgcolor: 'primary.main',
          animation: 'widthGrow 0.5s ease-out 0.5s forwards',
          '@keyframes widthGrow': {
            from: { width: 0 },
            to: { width: '4em' }
          }
        },
        mb: 3
      })}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle; 