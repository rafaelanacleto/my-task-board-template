import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { mockTask, mockTasks } from '../../../_mocks/task';
import { Task } from '../model/task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

describe('TaskService', () => {
  let service: TaskService;
  let httpTestController: HttpTestingController;
  const MOCKED_TASKS = mockTasks;
  const MOCKED_TASK = mockTask;
  const apiUrl = 'http://localhost:3000/tasks';
  const apiUrlWithId = `${apiUrl}/${MOCKED_TASK.id}`;
  const apiUrlWithId2 = `${apiUrl}/${MOCKED_TASKS[1].id}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService],
      imports: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TaskService);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tasks', () => {
    service.getTask().subscribe(tasks => {
      expect(tasks).toEqual(MOCKED_TASKS);
    });

    const req = httpTestController.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(MOCKED_TASKS);
  });
});
