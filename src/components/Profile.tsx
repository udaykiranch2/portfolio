import { Box, useTheme } from "@mui/material";
import meAi from '../assets/meAi.png';

const Profile = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: { xs: '300px', sm: '400px', md: '600px' },
        perspective: '1000px',
        margin: '0 auto',
        py: { xs: 8, md: 16 },
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'scale(1.02)',
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            right: '-10%',
            bottom: '-20%',
            background: (theme) => `
              radial-gradient(
                circle at 30% 50%, 
                ${theme.palette.primary.main}15 0%, 
                transparent 70%
              )
            `,
            filter: 'blur(30px)',
            zIndex: 0,
            animation: 'pulse 4s ease-in-out infinite',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '10%',
            left: '10%',
            right: '10%',
            bottom: 0,
            background: (theme) => `
              linear-gradient(
                145deg, 
                ${theme.palette.primary.main}10, 
                ${theme.palette.secondary.main}10
              )
            `,
            clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            zIndex: 0,
            animation: 'morph 15s ease-in-out infinite',
          },
          '@keyframes pulse': {
            '0%, 100%': {
              transform: 'scale(1)',
              opacity: 0.5,
            },
            '50%': {
              transform: 'scale(1.05)',
              opacity: 0.7,
            },
          },
          '@keyframes morph': {
            '0%, 100%': {
              clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            },
            '50%': {
              clipPath: 'polygon(25% 0%, 100% 75%, 0% 100%)',
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'translateZ(0)',
            '&:hover': {
              transform: 'translateZ(20px)',
            },
          }}
        >
          <img
            src={meAi}
            alt="Profile"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'center',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
              animation: 'float 6s ease-in-out infinite',
            }}
          />
        </Box>
      </Box>

      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '20px',
          height: '20px',
          background: theme.palette.primary.main,
          borderRadius: '50%',
          opacity: 0.2,
          animation: 'float 4s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '-5%',
          width: '30px',
          height: '30px',
          background: theme.palette.secondary.main,
          borderRadius: '50%',
          opacity: 0.2,
          animation: 'float 5s ease-in-out infinite',
        }}
      />
      
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Profile;
