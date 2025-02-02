import { Box } from "@mui/material";
import meAi from '../assets/meAi.png';

const Profile = () => {
//   const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        perspective: '1000px',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          transform: 'rotateX(5deg)',
          transformStyle: 'preserve-3d',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '-10px -10px -20px -10px',
            background: 'linear-gradient(145deg, rgba(0,118,255,0.15), rgba(0,118,255,0))',
            borderRadius: '30px',
            filter: 'blur(15px)',
            zIndex: 0,
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
            borderRadius: '24px',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            backdropFilter: 'blur(10px)',
            boxShadow: `
              0 10px 30px rgba(0,0,0,0.1),
              0 1px 3px rgba(0,0,0,0.05),
              inset 0 1px 1px rgba(255,255,255,0.2)
            `,
            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            transformStyle: 'preserve-3d',
            '&:hover': {
              transform: 'rotateX(8deg)',
              boxShadow: `
                0 20px 40px rgba(0,0,0,0.12),
                0 1px 3px rgba(0,0,0,0.05),
                inset 0 1px 1px rgba(255,255,255,0.2)
              `,
              '& img': {
                transform: 'translateZ(30px) rotateX(-12deg) scale(1.05)',
              },
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
              objectFit: 'cover',
              objectPosition: 'center',
              transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
              transform: 'translateZ(0)',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
