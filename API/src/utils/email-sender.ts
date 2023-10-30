import { configDotenv } from 'dotenv';
import { Resend } from 'resend';
import { ProductEntity } from 'src/products/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';
configDotenv();
const resend_key = process.env.RESEND_API_KEY;
const resend = new Resend(resend_key);
const frontend_url = process.env.FRONTEND_BASE_URL;

export async function sendEmailNotification(
  user: UserEntity,
  product: ProductEntity,
) {
  try {
    await resend.emails.send({
      from: 'EcoSubasta <onboarding@resend.dev>',
      to: [user.email],
      subject: '¡Ganaste la subasta!',
      html: `
    <div style="background-color: #f0f0f0; padding: 20px; text-align: center;">
      <h2>¡Felicidades ${user.firstName}! Has ganado la subasta</h2>
      <img src="${product.img[0]}" alt="imagen del producto" />
      <p>Título del producto: ${product.name}</p>
      <p>Precio del producto: 100 $ARS</p>
      <a href="${frontend_url}/Product/${product.id}" style="text-decoration: none; background-color: #007BFF; color: #fff; padding: 10px 20px; border-radius: 5px; margin-top: 10px; display: inline-block;">Ver Producto</a>
    </div>
  `,
    });
  } catch (error) {
    console.log(error);
  }
}
