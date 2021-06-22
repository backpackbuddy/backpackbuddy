import Title from '../../elements/Title';
import ProfileAccountForm from '../ProfileAccountForm';
import ProfilePasswordForm from '../ProfilePasswordForm';

function ProfileAccount() {
  return (
    <>
      <Title text="UBAH INFORMASI AKUN" />
      <ProfileAccountForm />
      <div className="mt-5">
        <Title className="text-dark" text="GANTI PASSWORD" />
        <ProfilePasswordForm />
      </div>
    </>
  );
}

export default ProfileAccount;
