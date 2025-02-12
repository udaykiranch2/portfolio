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
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            right: '-10%',
            bottom: '-20%',
            background: 'radial-gradient(circle at 30% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(30px)',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-10%',
            left: '-5%',
            right: '-5%',
            bottom: '-10%',
            background: 'linear-gradient(145deg, rgba(0,0,0,0.08), transparent)',
            clipPath: 'polygon(30% 0%, 100% 20%, 70% 100%, 0% 80%)',
            zIndex: 0,
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.02)',
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
              transition: 'transform 0.5s ease',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
