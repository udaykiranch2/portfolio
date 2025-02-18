import { Button, ButtonProps } from "@mui/material";
import { Download } from "@mui/icons-material";

interface ResumeButtonProps extends Omit<ButtonProps, 'variant'> {
    pdfUrl: string;
    label?: string;
}

const ResumeButton = ({ 
    pdfUrl, 
    className,
    label = "Download Resume",
    ...buttonProps 
}: ResumeButtonProps) => {
    const handleClick = () => {
        // Open PDF in new tab
        window.open(pdfUrl, '_blank');
    };

    return (
        <Button
            variant="contained"
            onClick={handleClick}
            startIcon={<Download />}
            className={className}
            sx={{
                px: 3,
                py: 1,
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                boxShadow: 'none',
                '&:hover': {
                    boxShadow: 'none',
                    transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease-in-out',
                ...buttonProps.sx
            }}
            {...buttonProps}
        >
            {label}
        </Button>
    );
};

export default ResumeButton; 