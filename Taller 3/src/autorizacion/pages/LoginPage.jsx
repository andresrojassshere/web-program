import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

export function LoginPage() {
  const navigate = useNavigate(); // Obtener la función navigate

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario haga una recarga de la página por defecto
    // Aquí puedes agregar lógica para procesar los datos del formulario si es necesario

    // Luego, redirige al usuario a la página de dashboard
    navigate('/dashboard');
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-[#40b5cb] ">

      <div className="w-full max-w-md p-4 ">
        <Card className="flex items-center justify-center rounded-sm">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="Logo" className="mx-auto" />
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div >
              <div className="mb-2 block">
                <Label
                  htmlFor="email1"
                  value="Your email"
                />
              </div>
              <TextInput
                id="email1"
                placeholder="name@flowbite.com"
                required
                type="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value="Your password"
                />
              </div>
              <TextInput
                id="password1"
                required
                type="password"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                Remember me
              </Label>
            </div>
            <Button className="" type="submit">
              Login
            </Button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Don't have an account? <a href="#" className="text-[#40B5CB] hover:underline dark:text-blue-500"> Sign up</a>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
