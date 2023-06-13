import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { LabelsModule } from './labels/labels.module';

@Module({
  imports: [UsersModule, ProjectsModule, TasksModule, LabelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
