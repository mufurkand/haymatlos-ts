import PageContainer from "@/components/PageContainer";
import Button from "@/components/utils/Button";
import Input from "@/components/utils/Input";

export default function SignIn() {
  return (
    <PageContainer>
      <form className="flex gap-5 flex-col items-center bg-foreground dark:bg-darkForeground p-5 rounded-lg">
        <div className="flex flex-col lg:w-1/2 gap-2">
          <label htmlFor="username">Kullanıcı adı</label>
          <Input
            type="text"
            id="username"
            name="username"
            autocomplete="username"
            placeholder="Kullanıcı adınızı girin..."
          />
        </div>
        <div className="flex flex-col lg:w-1/2 gap-2">
          <label htmlFor="password">Şifre</label>
          <Input
            type="password"
            id="password"
            name="password"
            autocomplete="current-password"
            placeholder="Şifrenizi girin..."
          />
        </div>
        <Button type="submit">Kaydol</Button>
      </form>
    </PageContainer>
  );
}
