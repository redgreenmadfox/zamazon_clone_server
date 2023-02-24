import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    ProductModule,
    UserModule,
    AuthModule,
    StripeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
