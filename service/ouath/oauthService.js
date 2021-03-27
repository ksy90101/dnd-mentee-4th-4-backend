import Passport from 'passport';
import KakaoPassport from 'passport-kakao';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, 'config/.env') });

const kakaoConfig = () => {
  const KakaoStrategy = KakaoPassport.Strategy;

  Passport.use(
    'kakao',
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_KEY,
        callbackURL: '/auth/kakao/callback',
      },
      async (accessToken, refreashToken, profile, done) => {},
    ),
  );
};

module.exports = {
  kakaoConfig,
};
