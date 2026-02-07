import { Box } from "@mui/material";
import meAi from '../assets/meAi.png';

/**
 * Profile Image Component
 * Clean, frameless design that blends naturally with background
 */
const Profile = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: { xs: '320px', sm: '400px', md: '480px' },
        margin: '0 auto',
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Profile Image - No frame, blends with background */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '1 / 1.1',
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-12px)' },
          },
        }}
      >
        <img
          src={meAi}
          alt="Profile"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      </Box>
    </Box>
  );
};

export default Profile;
